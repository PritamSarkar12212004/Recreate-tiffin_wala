import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import { StyleSheet } from 'react-native';
import BottomSheet, {
    BottomSheetBackdrop,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
export type BottomSheetRef = {
    open: () => void;
    close: () => void;
};

const CustomBottomSheet = forwardRef<BottomSheetRef>((props, ref) => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
    useImperativeHandle(ref, () => ({
        open: () => bottomSheetRef.current?.expand(),
        close: () => bottomSheetRef.current?.close(),
    }));

    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            index={-1}
            enablePanDownToClose={true}
            backdropComponent={(sheetProps) => (
                <BottomSheetBackdrop
                    disappearsOnIndex={-1}
                    appearsOnIndex={0}
                    {...sheetProps}
                />
            )}
        >
            <BottomSheetView style={styles.content}>
                {props.children}
            </BottomSheetView>
        </BottomSheet>
    );
});

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
});

export default CustomBottomSheet;
