import styled from 'styled-components'


export const HomeContainer = styled.div`

    .gradient__bg {
        background:-moz-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);
        background:-webkit-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);
        background:-o-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);
        background:-ms-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);
        background:radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);
    }

    .gradient__text {
        background: var(--gradient-text);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .section__padding {
        padding: 4rem 6rem;
    }

    .section__margin {
        margin: 4rem 6rem;
    }

    .scale-up-center {
        -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

    @-webkit-keyframes scale-up-center {
        0% {
            -webkit-transform: scale(0.5);
                    transform: scale(0.5);
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
        }
    }

    @keyframes scale-up-center {
        0% {
            -webkit-transform: scale(0.5);
                    transform: scale(0.5);
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
        }
    }

    @media screen and (max-width: 700px) {
        .section__padding {
            padding: 4rem;
        }

        .section__margin {
            margin: 4rem;
        }
    }

    @media screen and (max-width: 550px) {
        .section__padding {
            padding: 4rem 2rem;
        }

        .section__margin {
            margin: 4rem 2rem;
        }  
    }

`