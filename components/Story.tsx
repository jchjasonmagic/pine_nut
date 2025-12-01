import React from 'react';
import { Mountain } from 'lucide-react';
import video1 from '../videos/video1.mp4';
import video2 from '../videos/video2.mp4';
import video3 from '../videos/video3.mp4';
import video4 from '../videos/video4.mp4';
import video5 from '../videos/video5.mp4';

const Story: React.FC = () => {
  const vids = [video1, video2, video3, video4, video5];

  return (
    <section className="py-24 bg-stone-900 text-stone-300 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <img 
            src="https://images.unsplash.com/photo-1516214104703-d8707475b31c?q=80&w=2628&auto=format&fit=crop" 
            alt="Pine Texture"
            className="w-full h-full object-cover"
         />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="md:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 text-amber-500 font-bold tracking-widest uppercase text-sm">
              <Mountain size={16} /> 
              <span>自然的馈赠</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
              30年风雨磨砺<br/>
              <span className="text-amber-600">才换来这一颗</span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed font-light">
              <p>
                这不仅仅是食物，更是时间的结晶。一棵红松子树，需历经<strong className="text-white font-medium">三十载风雨磨砺</strong>方能挂果，而一枚饱满的松果，更要沉淀<strong className="text-white font-medium">两年时光</strong>才得以成熟。
              </p>
              <p>
                产自东北长白山的红松子，每一颗都来之不易。采塔人需<strong className="text-white font-medium">徒手攀爬至20-30米的高空</strong>（约等于10层楼高），在挺拔摇晃的松树上寻摘松塔。
              </p>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 italic text-stone-400">
                "只有松塔中最为硕大饱满的核心果仁，才会带到你身边 🐿️"
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center p-4 bg-stone-800/50 rounded-lg">
                <div className="text-3xl font-bold text-amber-500 mb-1">30<span className="text-sm">年</span></div>
                <div className="text-xs text-stone-500 uppercase tracking-wider">树龄挂果</div>
              </div>
              <div className="text-center p-4 bg-stone-800/50 rounded-lg">
                <div className="text-3xl font-bold text-amber-500 mb-1">20<span className="text-sm">米+</span></div>
                <div className="text-xs text-stone-500 uppercase tracking-wider">高空作业</div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-stone-800/50">
              {(() => {
                const [index, setIndex] = React.useState(0);
                const [startX, setStartX] = React.useState<number | null>(null);
                const videoRef = React.useRef<HTMLVideoElement | null>(null);
                const isIOS = /iPhone|iPad|iPod/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '');
                const [needsUserPlay, setNeedsUserPlay] = React.useState(false);
                const [status, setStatus] = React.useState<'idle'|'loading'|'ready'|'error'>('idle');
                const [errorInfo, setErrorInfo] = React.useState<string>('');
                const [isFullscreen, setIsFullscreen] = React.useState(false);

                const goTo = (i: number) => {
                  setIndex(i);
                };
                const prev = () => goTo((index - 1 + vids.length) % vids.length);
                const next = () => goTo((index + 1) % vids.length);
                
                const onTouchStart = (e: React.TouchEvent) => setStartX(e.touches[0].clientX);
                const onTouchEnd = (e: React.TouchEvent) => {
                  if (startX === null) return;
                  const dx = e.changedTouches[0].clientX - startX;
                  if (Math.abs(dx) > 50) {
                    if (dx < 0) next(); else prev();
                  }
                  setStartX(null);
                };

                React.useEffect(() => {
                  const v = videoRef.current;
                  if (v) {
                    try {
                      // 切换视频时重置状态
                      setStatus('loading');
                      setErrorInfo('');
                      v.pause();
                      v.currentTime = 0;
                      v.load();
                    } catch {}
                  }
                }, [index]);

                React.useEffect(() => {
                  const v = videoRef.current as any;
                  const onFsChange = () => {
                    setIsFullscreen(!!document.fullscreenElement || !!(v && v.webkitDisplayingFullscreen));
                  };
                  const onBegin = () => setIsFullscreen(true);
                  const onEnd = () => setIsFullscreen(false);
                  document.addEventListener('fullscreenchange', onFsChange);
                  if (v && typeof v.addEventListener === 'function') {
                    v.addEventListener('webkitbeginfullscreen', onBegin);
                    v.addEventListener('webkitendfullscreen', onEnd);
                  }
                  return () => {
                    document.removeEventListener('fullscreenchange', onFsChange);
                    if (v && typeof v.removeEventListener === 'function') {
                      v.removeEventListener('webkitbeginfullscreen', onBegin);
                      v.removeEventListener('webkitendfullscreen', onEnd);
                    }
                  };
                }, []);

                return (
                  <div className="w-full h-[60vh] md:h-[600px]" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                    <div className="relative z-10 w-full h-full bg-black">
                      <video
                        key={index} // 这里的 key 很重要，确保 React 重新渲染 video 标签
                        ref={videoRef}
                        src={vids[index]}
                        controls
                        playsInline={true}
                        webkit-playsinline="true"
                        x5-playsinline="true"
                        x5-video-player-type="h5"
                        preload="metadata"
                        controlsList="nodownload"
                        muted={true} // 必须显式为 true 才能自动播放
                        // 移除 crossOrigin 以避免同源环境下的潜在策略影响
                        autoPlay={true}
                        onError={(e) => {
                          const v = e.currentTarget;
                          setStatus('error');
                          const msg = `code=${v.error?.code ?? 'n/a'} ns=${v.networkState} rs=${v.readyState}`;
                          setErrorInfo(msg);
                          setNeedsUserPlay(isIOS);
                        }}
                        onCanPlay={() => {
                          const v = videoRef.current;
                          if (v) {
                            v.play().catch(err => {
                              console.log("Autoplay blocked, showing button", err);
                              setNeedsUserPlay(true);
                            });
                          }
                        }}
                        onLoadedData={() => {
                          setStatus('ready');
                        }}
                        className="absolute inset-0 w-full h-full transition-opacity duration-300"
                        style={{ opacity: 1, objectFit: isFullscreen ? 'contain' : 'cover' }}
                      >
                        <source src={vids[index]} type="video/mp4" />
                      </video>

                      {/* 状态提示层（仅移动端显示更清晰） */}
                      {status !== 'ready' && (
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          <div className="px-4 py-2 rounded bg-stone-900/70 text-white text-sm">
                            {status === 'loading' && '正在加载视频…'}
                            {status === 'error' && `播放失败 (${errorInfo})`}
                          </div>
                        </div>
                      )}
                    </div>

                    {needsUserPlay && (
                      <button
                        onClick={() => {
                          const v = videoRef.current;
                          if (v) {
                            v.play()
                             .then(() => setNeedsUserPlay(false))
                             .catch(e => console.error(e));
                          }
                        }}
                        className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-600/90 text-white rounded-full px-8 py-4 shadow-xl font-bold backdrop-blur-sm"
                      >
                        点击播放视频
                      </button>
                    )}

                    <button
                      onClick={prev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-stone-900/40 hover:bg-stone-900/60 text-white rounded-full p-3 z-20"
                    >
                      ‹
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-stone-900/40 hover:bg-stone-900/60 text-white rounded-full p-3 z-20"
                    >
                      ›
                    </button>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                      {vids.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => goTo(i)}
                          className={`w-2.5 h-2.5 rounded-full shadow ${i === index ? 'bg-white' : 'bg-white/50'}`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent md:opacity-50 opacity-20 pointer-events-none z-0"></div>
              <div className="absolute bottom-8 left-8 text-white z-10">
                <div className="text-xs uppercase tracking-widest opacity-70 mb-2">Brand Story</div>
                <div className="text-2xl font-serif">走进长白山与松子</div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-600/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-900/20 rounded-full blur-3xl z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Story;
