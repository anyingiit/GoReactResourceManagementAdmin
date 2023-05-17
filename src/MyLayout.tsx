import { Layout, LayoutComponent } from 'react-admin';
import { ReactQueryDevtools } from 'react-query/devtools';

export const MyLayout: LayoutComponent = props => (
    <>
        <Layout {...props} />
        <ReactQueryDevtools initialIsOpen={false} />
    </>
);