import * as C from './styles';
import { Typography } from "../../styles";
import { InfoProfile } from '../InfoProfile';
import { Photo } from '../../types/Photo';

type Props = {
    photos: Photo[];
}

export const Publications = ({ photos }: Props) => {
    return (
        <C.Container>
            <Typography>Publicações</Typography>

            <C.ContainerPublications>
                {photos.map((photo) => (
                    <C.Content key={photo?.id}>
                        <C.PublicationImage src={photo?.src?.medium} alt="fotografia" />     
                        <InfoProfile 
                            name={photo?.photographer}
                            photo={photo?.src?.small}
                            link={photo?.photographer_url}
                         />
                    </C.Content>
                ))}                 
            </C.ContainerPublications>
        </C.Container>
    );
}