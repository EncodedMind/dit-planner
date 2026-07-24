import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    CloseButton,
    Code,
} from '@chakra-ui/react';

export function MaintenanceAlert({ onClose, ...props }) {
    return (
        <Alert
            status='warning'
            alignItems='flex-start'
            borderRadius='md'
            position='relative'
            pr={onClose ? 12 : 4}
            {...props}
        >
            <AlertIcon mt={1} />
            <Box>
                <AlertTitle>Maintainer wanted</AlertTitle>
                <AlertDescription>
                    This website will no longer be maintained, and its courses will not be updated.
                    If you would like to become a maintainer and help keep this project alive,
                    contact me on Discord at <Code colorScheme='orange'>alex_stavrin</Code>.
                </AlertDescription>
            </Box>
            {onClose && (
                <CloseButton
                    aria-label='Dismiss maintenance notice'
                    position='absolute'
                    top={2}
                    right={2}
                    onClick={onClose}
                />
            )}
        </Alert>
    );
}
