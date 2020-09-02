import * as React from 'react';
import { Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { useAnimatedGestureHandler, withSpring } from 'react-native-reanimated';

interface Value {
  value: number;
}

interface Props {
  x: Value;
  y: Value;
  originY: Value;
  onSnap: (swipedRight: boolean) => void;
  children: React.ReactNode;
}

const { width } = Dimensions.get('window');

export const SwipePan = ({ x, y, onSnap, originY, children }: Props) => {
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.startX = x.value;
      ctx.startY = y.value;

      originY.value = event.y;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      const diff = ctx.startX + event.translationX;
      // dragged 40 percent of the screen's width
      const thresh = width * 0.4;

      if (diff > thresh) {
        // swiped right
        onSnap(true);
      } else if (diff < -1 * thresh) {
        // swiped left
        onSnap(false);
      } else {
        x.value = withSpring(0);
        y.value = withSpring(0);
      }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      {children}
    </PanGestureHandler>
  );
};
