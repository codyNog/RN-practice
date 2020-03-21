import React from 'react';
import styled from 'styled-components';
import {TouchableOpacity, Text, GestureResponderEvent} from 'react-native';
import {StyleProps} from '../../../types/components';

interface ColorProps {
  color?: string;
}

type WrapperProps = ColorProps & StyleProps;

const Wrapper = styled(TouchableOpacity)<WrapperProps>(props => ({
  backgroundColor: props.color,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 40,
  border: props.color ? `1px solid ${props.color}` : '1px solid black',
  borderRadius: 4,
  ...props.styleProps,
}));

interface LabelProps extends ColorProps {
  backgroundColor?: string;
}

const Label = styled(Text)<LabelProps>(props => ({
  color: props.color || 'white',
  fontSize: 24,
  backgroundColor: props.backgroundColor,
}));

interface FactoryProps {
  buttonColor?: string;
  labelColor?: string;
}

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
  style?: React.CSSProperties;
}

export const buttonFactory = ({
  buttonColor,
  labelColor,
}: FactoryProps): React.FC<Props> => ({onPress, style, children}) => {
  return (
    <Wrapper onPress={onPress} color={buttonColor} styleProps={style}>
      <Label color={labelColor} backgroundColor={buttonColor}>
        {children}
      </Label>
    </Wrapper>
  );
};
