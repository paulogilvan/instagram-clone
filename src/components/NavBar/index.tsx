import * as C from './styles';
import { Flex, Spacer, Typography } from '../../styles';
import { BsGear, BsSun } from "react-icons/bs";
import { BiExit, BiMoon } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { RiGlobalLine } from 'react-icons/ri';
import LogoInstagram from '../../assets/logo-instagram.svg';
import { FiSend } from 'react-icons/fi';
import { MdMonitor } from 'react-icons/md';

const menuNav = [
    {
        icon: <AiOutlineHome />,
        menuName: 'Inicio'
    },
    {
        icon: <RiGlobalLine />,
        menuName: 'Explorar'
    },
    {
        icon: <FiSend />,
        menuName: 'Direct'
    },
    {
        icon: <MdMonitor />,
        menuName: 'IGTV'
    },
    {
        icon: <BsGear />,
        menuName: 'Ajustes'
    },
];

type Props = {
    themeToggler: () => void;
    theme: string;
}

export const NavBar = ({ themeToggler, theme }: Props) => {
   
    type Props = {
        title: string;
        subTitle: string;
    }

    const GroupText = ({ title, subTitle }: Props) => {
        return (
            <Flex $gap="4px">
                <Typography>{title}</Typography>
                <Typography $weight="300" $size="12px" $height="14px">{subTitle}</Typography>
            </Flex>
        );
    }

    return (
        <C.Container>
            <Flex>
                <C.BtnButton onClick={themeToggler}>
                    {theme === 'light' ? <BiMoon /> : <BsSun />}
                </C.BtnButton>
            </Flex>

            <img src={LogoInstagram} alt="logo instagram" style={{width:'250px'}} />

            <Flex>
                <C.Profile>
                    <img src="https://avatars.githubusercontent.com/u/39015469?v=4" alt="imagem perfil github" />
                </C.Profile>

                <GroupText title="Paulo Gilvan" subTitle="@gilvan.web" />
            </Flex>  

            <Spacer $margin="8px" /> 

            <Flex $direction="row" $justify="space-between">
                <GroupText title="148" subTitle="Publicações" />
                <GroupText title="15K" subTitle="Seguidores" />
                <GroupText title="1K" subTitle="Seguindo" />
            </Flex>  

            <Spacer />

            <Flex $align="start" $gap="16px">
                {menuNav.map((menu) => (
                    <C.ListIcon key={menu.menuName}>
                    {menu.icon}
                    <Typography>{menu.menuName}</Typography>
                    </C.ListIcon>
                ))}                             
            </Flex>

            <Spacer />

            <C.Divider />

            <Spacer $margin="8px" />

            <Flex $align="start">                
                <C.ListIcon>
                <BiExit />
                <Typography>Sair</Typography>
                </C.ListIcon>            
            </Flex>
        </C.Container>
    );
}