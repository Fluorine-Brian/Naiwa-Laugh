import { useCallback, useRef, useState, type RefObject } from 'react';

export type PlaybackStatus = 'idle' | 'playing' | 'paused' | 'ended' | 'error';

type UseVideoPlaybackResult = {
  videoRef: RefObject<HTMLVideoElement | null>;
  status: PlaybackStatus;
  errorMessage: string;
  play: () => Promise<void>;
  pause: () => void;
  replay: () => Promise<void>;
  handleEnded: () => void;
  handleError: () => void;
};

const MISSING_VIDEO_MESSAGE = '未找到视频素材，请检查 public/video/naiwa.mp4';
const PLAY_FAILED_MESSAGE = '无法播放视频，请检查浏览器声音权限或视频格式。';

export function useVideoPlayback(): UseVideoPlaybackResult {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<PlaybackStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const play = useCallback(async () => {
    const video = videoRef.current;

    if (!video) {
      setStatus('error');
      setErrorMessage(MISSING_VIDEO_MESSAGE);
      return;
    }

    try {
      await video.play();
      setStatus('playing');
      setErrorMessage('');
    } catch {
      setStatus('error');
      setErrorMessage(PLAY_FAILED_MESSAGE);
    }
  }, []);

  const pause = useCallback(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.pause();
    setStatus('paused');
  }, []);

  const replay = useCallback(async () => {
    const video = videoRef.current;

    if (!video) {
      setStatus('error');
      setErrorMessage(MISSING_VIDEO_MESSAGE);
      return;
    }

    try {
      video.pause();
      video.currentTime = 0;
      await video.play();
      setStatus('playing');
      setErrorMessage('');
    } catch {
      setStatus('error');
      setErrorMessage(PLAY_FAILED_MESSAGE);
    }
  }, []);

  const handleEnded = useCallback(() => {
    const video = videoRef.current;

    if (!video) {
      setStatus('idle');
      return;
    }

    video.pause();
    video.currentTime = 0;
    setStatus('idle');
  }, []);

  const handleError = useCallback(() => {
    setStatus('error');
    setErrorMessage(MISSING_VIDEO_MESSAGE);
  }, []);

  return {
    videoRef,
    status,
    errorMessage,
    play,
    pause,
    replay,
    handleEnded,
    handleError,
  };
}
