import { createBoard } from '@wixc3/react-board';
import Container from '../../../Container';

export default createBoard({
    name: 'Container',
    Board: () => <Container children={undefined} />
});
