import React from 'react';
import styled from 'styled-components';
import {View, ScrollView} from 'react-native';

const style = {
  padding: 16,
  flex: 1,
};

const centerStyle = {
  ...style,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

interface CenterProps {
  centered?: boolean;
}

const Scroll = styled(ScrollView)<CenterProps>(props =>
  props.centered ? centerStyle : style,
);

const NoScroll = styled(View)<CenterProps>(props =>
  props.centered ? centerStyle : style,
);

interface Props {
  scrollable?: boolean;
}

export const Template: React.FC<Props> = ({scrollable, children}) => {
  return (
    <>
      {scrollable ? (
        <Scroll>{children}</Scroll>
      ) : (
        <NoScroll>{children}</NoScroll>
      )}
    </>
  );
};
