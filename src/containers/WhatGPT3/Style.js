import styled from 'styled-components'


export const WhatGPT3Container = styled.div`
    .gpt3__whatgpt3 {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        background: var(--color-footer);
        background:-moz-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);
        background:-webkit-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);
        background:-o-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);
        background:-ms-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);
        background:radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        .gpt3__whatgpt3-feature {
            display: flex;

            .gpt3__features-container__feature {
                margin: 0;
            }

            .gpt3__features-container_feature-text {
                max-width: 700px;
            }
        }  

        .gpt3__whatgpt3-heading {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 4rem 0 2rem;

            h1 {
                font-size: 34px;
                line-height: 45px;
                font-weight: 800;
                font-family: var(--font-family);
                max-width: 510px;
            }

            p {
                font-family: var(--font-family);
                font-weight: 500;
                font-size: 16px;
                line-height: 30px;
                color: var(--color-subtext);
                cursor: pointer;
            }
        }

        .gpt3__whatgpt3-container {
            display: flex;
            flex-direction: row;
            margin-top: 2rem;

            .gpt3__features-container__feature {
                flex: 1;
                margin: 1rem;
                min-width: 210px;
                display: unset;
                flex-direction: column;
            }

            .gpt3__features-container_feature-text {
                margin-top: 0.5rem;
            }

        }
    }

    @media screen and (max-width: 850px) {
        .gpt3__whatgpt3-heading {
            flex-wrap: wrap;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 0rem;
        }

        .gpt3__whatgpt3-container {
            flex-wrap: wrap;
        }

        .gpt3__whatgpt3-heading p {
            margin-top: 1rem;
        }
    }

    @media screen and (max-width: 650px) {
        .gpt3__whatgpt3-feature .gpt3__features-container__feature {
            flex-direction: column;
        }

        .gpt3__whatgpt3-feature .gpt3__features-container_feature-text {
            margin-top: 0.5rem;
        }

        .gpt3__whatgpt3-heading {
            display: flex;
            flex-direction: column;
            
            h1 {
                font-size: 28px;
                line-height: 40px;
            }
        }
    }

    @media screen and (max-width: 350px) {
        .gpt3__whatgpt3-container .gpt3__features-container__feature {
            margin: 1rem 0;
            min-width: 100%;
        }
    }

`