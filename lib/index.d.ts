/// <reference types="react" />
import PropTypes from 'prop-types';
declare type Props = {
    settings: object;
    callbacks: object;
    tiltChange: (e: CustomEvent) => any;
    className: string;
    children: ChildNode | ChildNode[];
};
declare function ReactTilt({ settings, callbacks, tiltChange, className, children, ...props }: Props): JSX.Element;
declare namespace ReactTilt {
    var propTypes: {
        settings: PropTypes.Requireable<object>;
        callbacks: PropTypes.Requireable<object>;
        tiltChange: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        props: PropTypes.Requireable<object>;
    };
    var defaultProps: {
        className: string;
    };
}
export default ReactTilt;
