import { useCallback, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'rpm-avatar-url';
const FALLBACK_AVATAR = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nini';

const getCreatorUrl = () => {
    // Ready Player Me avatar creator (frameApi=true enables postMessage integration)
    return 'https://readyplayer.me/avatar?frameApi=true';
};

const toImageUrl = (avatarUrl: string) => {
    if (!avatarUrl) return FALLBACK_AVATAR;

    // Ready Player Me returns a .glb URL (for the 3D model). Convert to a preview PNG.
    const match = avatarUrl.match(/avatars\/(.+?)\.glb/);
    if (match) {
        const id = match[1];
        return `https://models.readyplayer.me/${id}.png?scene=fullbody-portrait-v1&blendShapes[Wolf3D_Head][mouthSmile]=0.3`;
    }

    return avatarUrl;
};

const ReadyPlayerMeAvatar: React.FC<{ size?: number }> = ({ size = 44 }) => {
    const [avatarUrl, setAvatarUrl] = useState<string>(() => {
        if (typeof window === 'undefined') return '';
        return window.localStorage.getItem(STORAGE_KEY) || '';
    });
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const imgUrl = useMemo(() => toImageUrl(avatarUrl), [avatarUrl]);

    const onMessage = useCallback((event: MessageEvent) => {
        if (!event.data) return;
        if (event.data.source !== 'readyplayerme') return;

        const { eventName, data } = event.data;
        if (eventName === 'v1.avatar.exported' && typeof data?.url === 'string') {
            setAvatarUrl(data.url);
            window.localStorage.setItem(STORAGE_KEY, data.url);
            setIsPopupOpen(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('message', onMessage);
        return () => window.removeEventListener('message', onMessage);
    }, [onMessage]);

    const openAvatarCreator = useCallback(() => {
        const url = getCreatorUrl();
        const width = 900;
        const height = 700;
        const left = window.screenX + (window.outerWidth - width) / 2;
        const top = window.screenY + (window.outerHeight - height) / 2;

        window.open(
            url,
            'ReadyPlayerMe',
            `toolbar=0,location=0,menubar=0,width=${width},height=${height},top=${top},left=${left}`
        );
        setIsPopupOpen(true);
    }, []);

    return (
        <button
            type="button"
            onClick={openAvatarCreator}
            style={{
                position: 'relative',
                width: size,
                height: size,
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.6)',
                overflow: 'hidden',
                padding: 0,
                background: '#f5f5f5',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            title="Click to create/edit avatar"
        >
            <img
                src={imgUrl || FALLBACK_AVATAR}
                alt="Profile avatar"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                    (e.target as HTMLImageElement).src = FALLBACK_AVATAR;
                }}
            />
            {isPopupOpen && (
                <span
                    style={{
                        position: 'absolute',
                        bottom: -2,
                        right: -2,
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        background: '#4ade80',
                        border: '2px solid white',
                    }}
                />
            )}
        </button>
    );
};

export default ReadyPlayerMeAvatar;
