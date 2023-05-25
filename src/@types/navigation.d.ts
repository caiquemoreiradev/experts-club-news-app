export type NewsDetailsProps = {
    id: string;
}

declare global {

    namespace ReactNavigation {

        interface RootParamList {
            home: undefined;
            details: NewsDetailsProps;
        }
    }
}
