import styled from "styled-components"


export const PossibilityContainer = styled.div`
    .gpt3__possibility {
        display: flex;
        flex-direction: row;

        .gpt3__possibility-image {
            flex: 1;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-right: 2rem;

            img {
                width: 100%;
                height: 100%;
            }
        } 

        .gpt3__possibility-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: left;

            h4 {
                font-family: var(--font-family);
                font-weight: 500;
                font-size: 16px;
                color: #71e5ff;
                margin-bottom: 2rem;
            }

            h4:last-child {
                color: #ff8a71;
            }

            h1 {
                font-family: var(--font-family);
                font-weight: 800;
                font-size: 34px;
                line-height: 45px;
                margin-bottom: 2rem;
            }

            p {
                font-family: var(--font-family);
                font-size: 16px;
                line-height: 30px;
                color: #81afdd;
                margin-bottom: 2rem;
            }
        }
    }

    @media screen and (max-width: 950px) {
        .gpt3__possibility {
            flex-direction: column;

            .gpt3__possibility-image {
                margin: 1rem 0;
            }

            .gpt3__possibility-content {
                margin-top: 2rem;
            }
            
        }

    }

`