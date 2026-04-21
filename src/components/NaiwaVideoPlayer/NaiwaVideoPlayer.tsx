import type { MouseEvent } from 'react';
import { useVideoPlayback } from '../../hooks/useVideoPlayback';
import './NaiwaVideoPlayer.css';

const VIDEO_SRC = '/video/naiwa.mp4';

export function NaiwaVideoPlayer() {
  const {
    videoRef,
    status,
    errorMessage,
    play,
    pause,
    replay,
    handleEnded,
    handleError,
  } = useVideoPlayback();

  const isPlaying = status === 'playing';

  const handleSurfaceClick = async () => {
    await replay();
  };

  const handlePlayPauseClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (isPlaying) {
      pause();
      return;
    }

    await play();
  };

  const handleReplayClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    await replay();
  };

  return (
    <section className="naiwa-player" onClick={handleSurfaceClick}>
      <div className="naiwa-player__viewport">
        <video
          ref={videoRef}
          className="naiwa-player__video"
          src={VIDEO_SRC}
          preload="auto"
          playsInline
          onEnded={handleEnded}
          onError={handleError}
        />
      </div>

      <div className="naiwa-player__notice" aria-live="polite">
        {errorMessage}
      </div>

      <div className="naiwa-player__controls" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="naiwa-player__button"
          onClick={handlePlayPauseClick}
          aria-label={isPlaying ? '暂停' : '播放'}
          title={isPlaying ? '暂停' : '播放'}
        >
          <span aria-hidden="true">{isPlaying ? '⏸' : '▶'}</span>
        </button>
        <button
          type="button"
          className="naiwa-player__button"
          onClick={handleReplayClick}
          aria-label="重头再来"
          title="重头再来"
        >
          <span aria-hidden="true">↻</span>
        </button>
      </div>
    </section>
  );
}
