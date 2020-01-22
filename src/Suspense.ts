import React, { Component, ReactNode } from 'react';

// TODO:
const isPromise = (p: any): boolean => true;

interface SuspenseProps {
    fallback: ReactNode;
}

interface SuspenseState {
    status: string; //'pending' | 'reject' | 'resolve'
    promise: Promise<any> | null;
}

class Suspense extends Component<SuspenseProps, SuspenseState> {
    state = {
        status: 'pending',
        promise: null
    };
    static getDerivedPropsFromError(error) {
        if (isPromise(error)) {
            return { promise: error };
        }
        return null;
    }
    render() {
        const { children, fallback } = this.props;
        const { status } = this.state;
        return status === 'resolve' ? children : fallback;
    }
}

export { Suspense };
