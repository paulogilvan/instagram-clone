import * as C from './styles';
import { FiSend } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export const Header = () => {
    return (
        <C.Container>
            <C.Input placeholder="🔎 Buscar" />

            <C.ContainerActions>
                <FiSend className='icon' />
                <IoMdNotificationsOutline className='icon' />

                <C.Button>
                    <AiOutlinePlusCircle className='icon' />
                    Nova Foto
                </C.Button>
            </C.ContainerActions>
        </C.Container>
    );
}