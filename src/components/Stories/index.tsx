import { useState } from 'react';
import * as C from './styles';
import { Button, Flex, Typography } from "../../styles";
import { Photo } from '../../types/Photo';

type Props = {
    photos: Photo[];
}

export const Stories = ({ photos }: Props) => {
    const[showAll, setShowAll] = useState(false);    

    photos = showAll ? photos : photos.slice(0, 10);

    const handleShowAll = () => {
        setShowAll(!showAll);
    }    

    return (
        <Flex $padding="8px 20px" $align="start" $gap="4px">
            <Typography $weight="400">Stories</Typography>

            <Flex $align="end">
                <Button onClick={handleShowAll}>
                    <Typography $size="14px">{showAll ? 'Ver menos' : 'Ver mais'}</Typography>
                </Button>

                <C.Container>
                    {photos.map((photo) => (
                        <C.Profile key={photo?.id}>
                            <img src={photo?.src?.medium} alt="fotografia" />
                        </C.Profile>
                    ))}                                        
                </C.Container>
            </Flex>
        </Flex>
    );
}