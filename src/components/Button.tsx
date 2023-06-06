'use client';

import React, { FC } from 'react';
import {
    Button as ButtonReactBootstrap,
    ButtonProps as ButtonReactBootstrapProps,
} from 'react-bootstrap';

interface ButtonProps extends ButtonReactBootstrapProps {
    label?: string;
    labelClassName?: string;
}

const Button: FC<ButtonProps> = (props) => {
    return (
        <ButtonReactBootstrap {...props}>
            {props.label ? <p className={props.labelClassName}>{props.label}</p> : props.children}
        </ButtonReactBootstrap>
    );
};

export default Button;
