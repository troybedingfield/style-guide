import { useToast } from '~/app/_context/ToastContextNew';
import Button from '~/app/components/Button/Button';

export default function ToastTest() {

    const { addToast } = useToast()

    function toastTestSuccess(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        addToast(`Success!`, `success`);
    }
    function toastTestWarning(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        addToast(`Warning`, `warning`);
    }
    function toastTestError(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        addToast(`Error!`, `error`);
    }
    function toastTestInfo(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        addToast(`Info`, `info`);
    }

    return (
        <>
            <Button buttonClick={toastTestInfo} maxWidth={230} customBGColor='#3173C2'>Click to Show Info Toast</Button>
            <Button buttonClick={toastTestSuccess} maxWidth={230} customBGColor='#34B439'>Click to Show Success Toast</Button>
            <Button buttonClick={toastTestWarning} maxWidth={230} customBGColor='#E47B12'>Click to Show Warning Toast</Button>
            <Button buttonClick={toastTestError} maxWidth={230} customBGColor='#DF120B'>Click to Show Error Toast</Button>
        </>
    )
}