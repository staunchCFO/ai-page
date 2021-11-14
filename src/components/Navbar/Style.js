import styled from 'styled-components'


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 6rem;

    .gpt3__navbar-links {
        display: flex;
        flex: 1;
        justify-content: flex-start;
        align-items: center;
    }

    .gpt3__navbar-links_logo {
        margin-right: 2rem;
    }

    .gpt3__navbar-links_logo img {
        width: 62.56px;
        height: 16.02px;
    }

    .gpt3__navbar-links_container {
        display: flex;
        flex-direction: row;
    }

    .gpt3__navbar-sign {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .gpt3__navbar-links_container p,
    .gpt3__navbar-sign p,
    .gpt3__navbar-menu_container p {
        color: #fff;
        font-family: var(--font-family);
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        text-transform: capitalize;
        margin: 0 1rem; 
        cursor: pointer;
    }

    .gpt3__navbar-sign button,
    .gpt3__navbar-menu_container button {
        cursor: pointer;
        padding: 0.5rem 1rem;
        background: #ff4820;
        color: #fff;
        border-radius: 5px;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        border: none;
        outline: none;
    }

    .gpt3__navbar-menu {
        margin-left: 1rem;
        display: none;
        position: relative;

        svg {
            cursor: pointer;
        }

        .gpt3__navbar-menu_container {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            flex-direction: column;
            text-align: end;
            background: var(--color-footer);
            padding: 2rem;
            position: absolute;
            top: 40px;
            right: 0;
            margin-top: 1rem;
            min-width: 210px;
            border-radius: 5px;
            box-shadow: 0 0 5 rgba(0, 0, 0, 0.2);

            p {
                margin: 1rem 0;
            }

        }
    }

    @media screen and (max-width: 1050px) {

        .gpt3__navbar-links_container {
            display: none;
        }

        .gpt3__navbar-menu {
            display: flex;
        }

        .gpt3__navbar-menu_container-links-sign {
                display: none;
            }
    }

    @media screen and (max-width: 700px) {
            
        padding: 2rem 4rem;

    }

    @media screen and (max-width: 550px) {

        padding: 2rem;

        .gpt3__navbar-sign {
            display: none; 
        }

        .gpt3__navbar-menu_container {
            top: 20px;

            .gpt3__navbar-menu_container-links-sign {
                display: block;
            }
        }

    }
`