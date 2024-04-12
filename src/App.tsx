import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import * as T from './styles/theme';
import * as C from './styles';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { Stories } from './components/Stories';
import { Publications } from './components/Publications';
import ReactLoading from 'react-loading';
import { getPhotos } from './services/photos';
import { Photo } from './types/Photo';

const App = () => {
  const PHOTOS_PER_PAGE = 8;

  const [theme, setTheme] = useState('dark');
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isloading,  setIsLoading] = useState<boolean>(false);
  const [photosPerPage, setPhotosPerPage] = useState(PHOTOS_PER_PAGE);

  const releaseLoading = () => setIsLoading(false);

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  } 
  
  const handlePhotosPerPage = () => {
    setPhotosPerPage(photosPerPage + PHOTOS_PER_PAGE);    
  } 
  console.log(photosPerPage)

  const fetchPhotos = async () => {
    setIsLoading(true);
    const data = await getPhotos(photosPerPage, releaseLoading);    
    releaseLoading
    setIsLoading(false)
    setPhotos(data)
  }  
  console.log(photos)

  useEffect(() => {
    fetchPhotos();
  }, [photosPerPage]);

  return (
      <ThemeProvider theme={theme === 'light' ? T.lightTheme : T.darkTheme}>
        <C.Container>
          <NavBar themeToggler={themeToggler} theme={theme} /> 

          <C.Flex $gap="2px">
            <Header />
            <Stories photos={photos} />
            <Publications photos={photos} />

            {isloading ? (
              <ReactLoading type="spinningBubbles" color={theme.textPrimary} height={20} width={20} />
            ):(
              <C.Button onClick={handlePhotosPerPage}>
                <C.Typography>Ver Mais</C.Typography>
              </C.Button>
            )}  
            
          </C.Flex>        
        </C.Container>      
      </ThemeProvider> 
  );
}

export default App;