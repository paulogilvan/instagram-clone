import styled from'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    color: ${props => props.theme.textPrimary};
`;

export const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    &:hover {
        opacity: 0.7;
    }
`;

export const ProfileImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;