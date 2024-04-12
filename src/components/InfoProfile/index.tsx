import * as C from './styles';
import { AiFillHeart } from "react-icons/ai";
import { Flex, Typography } from "../../styles";
import { FaRegComment } from "react-icons/fa";
import { randomNumbers } from '../../utils/randomNumbers';

type Props = {
    name: string;
    photo: string;
    link: string;
}

export const InfoProfile = ({ name, photo, link }: Props) => {

    return (
        <Flex $direction='row' $justify='space-between'> 
            <C.Container>
                <C.Link href={link} target="_blank">
                    <C.ProfileImage src={photo} alt="fotografia" />
                    <Typography $weight='300' $size='13px' $height='15px'>{name}</Typography>
                </C.Link>
            </C.Container>

            <C.Container>
                <AiFillHeart color='red' />
                <Typography $weight='300' $size='13px' $height='15px'>{randomNumbers()}</Typography>

                <FaRegComment />
                <Typography $weight='300' $size='13px' $height='15px'>{randomNumbers()}</Typography>
            </C.Container>
        </Flex>
    );
}