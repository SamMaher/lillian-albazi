import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";

export const StyledGigListItemDiv = Styled.div`
    ${css.centredFlexbox};
    width: 100%;
    padding-bottom: ${styles.padding.s};
`;

export const StyledItemInfoDiv = Styled.div`
    ${css.centredFlexbox};
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: ${styles.padding.xxs};
`;

interface IStyledItemDivProps {
    justifyContent: string;
    flexGrow?: string;
    textAlign?: string;
}

export const StyledItemDiv = Styled.div`
    ${css.centredFlexbox};
    flex-direction: row;
    flex: ${(props: IStyledItemDivProps) => props.flexGrow || "1"} 1 0;
    justify-content: ${(props: IStyledItemDivProps) => props.justifyContent};
    text-align: ${(props: IStyledItemDivProps) => props.textAlign || "left"};
`;

interface IStyledItemContentDivProps {
    colour: string;
    backgroundColour?: string;
    fontWeight?: string;
    fontSize?: string;
}

const StyledItemContentDiv = Styled.div`
    padding: 0 ${styles.padding.s};
    color: ${(props: IStyledItemContentDivProps) => props.colour};
    background-color: ${(props: IStyledItemContentDivProps) => props.backgroundColour};
    font-weight: ${(props: IStyledItemContentDivProps) => props.fontWeight};
    font-size: ${(props: IStyledItemContentDivProps) => props.fontSize};
`;

const StyledItemButtonDiv = Styled(StyledItemContentDiv)`
    padding: ${styles.padding.xxs} ${styles.padding.s};
`;

const StyledHrDiv = Styled.div`
    width: 100%;
`;

const StyledHr = Styled.hr`
    color: ${styles.colours.theme.secondaryText};
    height: 2px;
    border-width: 0;
    background-color: ${styles.colours.theme.secondaryText};
`;

interface IGigListItemProps {
    date: string;
    text: string;
    buttonText?: string;
}

const GigListItem = (props: IGigListItemProps) => {
    const {
        date,
        text,
        buttonText
    } = props;

    var buttonTextToDisplay = buttonText || "Tickets";

    return (
        <StyledGigListItemDiv>
            <StyledItemInfoDiv>
                <StyledItemDiv justifyContent={"flex-start"}>
                    <StyledItemContentDiv
                        colour={styles.colours.theme.secondaryText}
                        fontWeight={styles.fontWeight.bold}
                        fontSize={styles.fontSize.large}>
                        <p>{date}</p>
                    </StyledItemContentDiv>
                </StyledItemDiv>
                <StyledItemDiv flexGrow={"3"} justifyContent={"center"} textAlign={"center"}>
                    <StyledItemContentDiv
                        colour={styles.colours.theme.secondaryText}>
                        <p>{text}</p>
                    </StyledItemContentDiv>
                </StyledItemDiv>
                <StyledItemDiv justifyContent={"flex-end"}>
                    <StyledItemButtonDiv
                        colour={styles.colours.theme.backgroundText}
                        backgroundColour={styles.colours.theme.tertiaryBase}>
                        <p>{buttonTextToDisplay}</p>
                    </StyledItemButtonDiv>
                </StyledItemDiv>
            </StyledItemInfoDiv>
            <StyledHrDiv>
                <StyledHr />
            </StyledHrDiv>
        </StyledGigListItemDiv>
    );
}

export default GigListItem;