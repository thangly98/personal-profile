import styled from 'styled-components'

export const _header = styled.header`
    position: relative;
`
export const _bgHeader = styled.div`
    height: 300px;
    background: ${(props) => `url(${props.bg}) no-repeat`};
    background-position: 50% 30%;
    background-size: cover;
`
export const _zoneInfo = styled.div`
    background-color: #23262b;
    box-shadow: -4px 8px 24px rgb(0 0 0 / 7%);
    border-radius: 20px;

    padding: 30px 0;

    position: absolute;
    width: fit-content;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
`
export const _mainInfo = styled.div`
    display: flex;
`
export const _avatar = styled.div`
    width: 120px;
    height: 120px;
    margin-top: -60px;

    border: 6px solid #23262b;
    border-radius: 30px;
    background: ${(props) => `url(${props.url}) no-repeat`};
    background-position: 50% 50%;
    background-size: cover;
`
export const _contentMainInfo = styled.div`
    padding: 0 20px;

    .full-name {
        margin-bottom: 4px;

        font-size: 24px;
        color: #fcfcfc;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        line-height: 1.3;
    }

    .job {
        font-size: 14px;
        color: #93959c;
    }

    .social-contact {
        padding: 0 5px;
        margin-top: 10px;
        list-style: none;

        li {
            display: inline-block;
            margin-left: 10px;

            &:first-of-type {
                margin-left: 0;
            }

            a {
                color: #93959c;
            }

            svg {
                fill: #93959c;
            }
        }
    }
`
