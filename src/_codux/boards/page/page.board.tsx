import { createBoard } from '@wixc3/react-board';
import Page from '../../../Page';
// import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'Page',
    Board: () => 
    // <MemoryRouter>
    <Page />
    // </MemoryRouter>
});
