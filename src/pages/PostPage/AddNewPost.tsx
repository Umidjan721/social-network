import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-modal";
import * as yup from "yup";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { useUserId } from "../../hooks/useUserId";
import { useAddNewPostMutation } from "../../store/API/postApi";

interface IAddNewPostProps {
  isOpen: boolean;
  onClose: ()=> void;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const AddPostFormScheme = yup.object({
  main_text: yup.string().min(4, "нужно больше букв").required(),
});

export const AddNewPost = ({ isOpen, onClose }: IAddNewPostProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddPostFormScheme),
    defaultValues: {
      main_text: "",
    },
  });

  const [AddNewPost, {data}] = useAddNewPostMutation();
  const userId = useUserId()
  
  

  const handleAddPostFormSubmit: SubmitHandler<{main_text: string}> = (
    formData
  ) => {
    if(formData){
      const payload = {
        user_id: Number(userId),
        main_text: formData.main_text,
    };
    AddNewPost(payload)
    onClose()   
    };   
  }

  return <Modal isOpen={isOpen} style={customStyles} onRequestClose={onClose}>
    <form onSubmit={handleSubmit(handleAddPostFormSubmit)}>
        <Controller 
            name="main_text" 
            control={control} 
            render={({field})=>(
            <AppInput 
                inputPlaceholder="введите текст поста" 
                inputType="text"
                inputValue={field.value}
                isError={Boolean(errors.main_text)}
                {...field}
                />
        )}/>
        <div>
            <AppButton 
            buttonText="Сохранить"
            buttonType="submit"
            isDisabled={false}/>
            <AppButton
             buttonText="Отменить"
             buttonType="button"
             isDisabled={false}
             buttonClick={onClose}/>
        </div>
    </form>
  </Modal>;
};
