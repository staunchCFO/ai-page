import styled from 'styled-components'


export const HeaderContainer = styled.div`

    .gpt3__header {
        display: flex;
        flex-direction: row;

        .gpt3__header-content {
            display: flex;
            flex: 1;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            margin-right:  5rem;

            h1 {
                font-family: var(--font-family);
                font-weight: 800;
                font-size: 62px;
                line-height: 75px;
                letter-spacing: -0.04em;
            }

            p {
                font-family: var(--font-family);
                font-weight: 400;
                font-size: 20px;
                font-style: normal;
                line-height: 28px;
                color: var(--color-text);
                margin-top: 1.5rem;
            }

            .gpt3__header-content__input {
                width: 100%;
                margin: 2rem 0 1rem;
                display: flex;
                flex-direction: row;

                input {
                    flex: 2;
                    width: 100%;
                    min-height: 50px;
                    font-family: var(--font-family);
                    font-weight: 400;
                    font-style: normal;
                    font-size: 20px;
                    line-height: 28px;
                    background: var(--color-footer);
                    border: 2px solid var(--color-footer);
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                    padding: 0 1rem;
                    outline: none;
                    color: #fff; 
                }

                button {
                    flex: 0.6;
                    width: 100%;
                    min-height: 50px; 
                    font-family: var(--font-family);
                    font-weight: 400;
                    font-style: normal;
                    font-size: 20px;
                    line-height: 28px;
                    background: #ff4820;
                    color: #fff;
                    border: none;
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                    cursor: pointer;
                    outline: none;
                    padding: 0 1rem;
                }
            }

            .gpt3__header-content__people {
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                margin-top: 2rem;

                img {
                    width: 181.79px;
                    height: 38px; 
                }

                p {
                    font-family: var(--font-family);
                    font-weight: 500;
                    font-style: normal;
                    font-size: 12px;
                    line-height: 38px;
                    margin: 0 0 0 1rem;
                    color: #fff;
                    text-align: center;
                }
            }
        }
    }

    .gpt3__header-image {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            height: 100%;

        }
    }

    @media screen and (max-width: 1050px) {

        .gpt3__header {
            display: flex;
            flex-direction: column;

            .gpt3__header-content {
                margin: 0 0 3rem;
            }
        }
        
    }

    @media screen and (max-width: 650px) {

        .gpt3__header {
            
            .gpt3__header-content {

                h1 {
                    font-size: 48px;
                    line-height: 60px;
                }

                p {
                    font-size: 16px;
                    line-height: 24px;
                }

                .gpt3__header-content__input {

                    input,
                    button {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }

                .gpt3__header-content__people {
                    display: flex;
                    flex-direction: column;

                    p {
                        margin: 0;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 490px) {
        
        h1 {
            font-size: 36px;
            line-height: 48px;
        }

        p {
            font-size: 14px;
            line-height: 24px;
        }

        .gpt3__header-content__input {

            input,
            button {
                font-size: 12px;
                line-height: 16px;
            }
        }
    }
    
`