import { Formulario } from "../Styles/components/form";

export const FormAccount = ({
    formRef,
    request,
}) => {
    const handleFormClick = (e) => {
        e.stopPropagation();
    };
    return  (
        <Formulario variant="primary" ref={formRef} onclick={handleFormClick}>
            {request}
        </Formulario>
    );
};