import * as React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

function Page() {
    return (
        <div>
            <Container>
                <Link to="/">Home</Link>
            </Container>
            <Container>
                <Link to="/topics">Topics</Link>
            </Container>
            <Container>
                <Link to="/settings">Settings</Link>
            </Container>
        </div>
    );
}

export default Page;
