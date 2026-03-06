import { Composition } from 'remotion';
import { F1Intro } from './compositions/F1Intro';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="F1Intro"
        component={F1Intro}
        durationInFrames={390}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
