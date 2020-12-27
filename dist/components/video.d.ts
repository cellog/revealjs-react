/// <reference types="react" />
import { BaseProps } from './BaseComponent';
export interface VideoProps extends BaseProps {
    autoplay?: boolean;
    controls?: boolean;
    height?: number;
    lazy?: string;
    loop?: boolean;
    muted?: boolean;
    preload?: '' | 'metadata' | 'auto' | 'none';
    width?: number;
    src: string[] | string;
}
declare function Video({ id, autoplay, className, controls, fragment, fragmentStyle, fragmentIndex, height, lazy, loop, muted, preload, width, src, }: VideoProps): JSX.Element;
export default Video;
