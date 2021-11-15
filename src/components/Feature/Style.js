import styled from 'styled-components'

export const FeatureContainer = styled.div`
    .gpt3__features-container__feature {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: row;
        margin: 1rem;

        .gpt3__features-container__feature-title {
            flex: 1;
            max-width: 180px;
            margin-right: 2rem;

            h1 {
                font-family: var(--font-family);
                font-weight: 800;
                font-size: 18px;
                line-height: 24px;
                letter-spacing: -0.04em;
                color: #fff;
            }

            div {
                width: 38px;
                height: 3px;
                background: var(--gradient-bar);
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                margin-bottom: 0.25rem;
            }
        }

        .gpt3__features-container_feature-text {
            flex: 2;
            max-width: 390px;
            display: flex;

            p {
                font-family: var(--font-family);
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                color: var(--color-text);
            }
        }
    }

    @media screen and (max-width: 550px) {
        .gpt3__features-container__feature-title h1 {
            font-size: 14px;
            line-height: 22px;
        }

        .gpt3__features-container_feature-text p {
            font-size: 12px;
            line-height: 20px;
        }

        .gpt3__features-container__feature {
            margin: 1rem 0;
        }
    }
`