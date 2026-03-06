import { Player } from '@remotion/player';
import { F1Intro } from '../remotion/compositions/F1Intro';

export default function RemotionTest() {
  return (
    <Player
      component={F1Intro}
      durationInFrames={390}
      fps={30}
      compositionWidth={1280}
      compositionHeight={720}
      style={{ width: '100%', borderRadius: '1rem' }}
      controls
      autoPlay
      loop
    />
  );
}
