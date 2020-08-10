import React from "react";
import Styled from "styled-components";

import { css } from "styles/styled-css";
import { styles } from "styles/variables";
import Heading from "components/heading";

const StyledFriendsDiv = Styled.div`
    ${css.centredFlexbox};
    padding: ${styles.padding.xs} 0 0;
    background-color: ${styles.colours.theme.backgroundBase};
    color: ${styles.colours.theme.backgroundText};
`;

const StyledHeadingDiv = Styled.div`
    ${css.centredFlexbox};
`;

const FriendsUl = Styled.ul`
    ${css.centredFlexbox};
    padding: ${styles.padding.s} 0;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center; 
    max-width: 10%;
`;

const FriendsLi = Styled.li`
    ${css.centredFlexbox};
    margin: ${styles.padding.xxxs};
    font-size: ${styles.fontSize.small};
`;

interface IFriendsProps {}

const Friends = (props: IFriendsProps) => {
    return (
        <StyledFriendsDiv>
            <div>
                <Heading text={"Friends"} type={"h3"} style={"h3"} />
            </div>
            <FriendsUl>
                <FriendsLi>Alima Parkes</FriendsLi>
                <FriendsLi>Aisling Adam</FriendsLi>
                <FriendsLi>Nisha Mccann</FriendsLi>
                <FriendsLi>Mica Knapp</FriendsLi>
                <FriendsLi>Jevan Garett</FriendsLi>
            </FriendsUl>
        </StyledFriendsDiv>
    );
}

export default Friends;