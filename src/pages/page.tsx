import React from  'react';

interface PageProps {
    children: JSX.Element | JSX.Element[]
}

const Page = ({children}: PageProps) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default Page;