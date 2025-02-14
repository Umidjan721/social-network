import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-modal";
import * as yup from "yup";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { IPost, useEditPOSTMutation } from "../../store/API/postApi";
import { Loader } from "../../components/Loader/Loader";

interface IEditPostProps {
  isOpen: boolean;
  onClose: () => void;
  post: IPost;
}

const EditPostFormScheme = yup.object({
  new_text: yup.string().min(4, "нужно больше букв").required(),
});

export const EditPost = ({ isOpen, onClose, post }: IEditPostProps) => {
  const [editPost, { isSuccess, isLoading }] = useEditPOSTMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EditPostFormScheme),
    defaultValues: {
      new_text: post.main__text,
    },
  });

  const handleEditPostFormSubmit: SubmitHandler<{ new_text: string }> = (
    formData
  ) => {
    if (formData) {
      const payload = {
        post_id: post.id,
        new_text: formData.new_text,
      };
      onClose();
    }
  };
  {
    isLoading && <Loader />;
  }
  return (
    <Modal isOpen={isOpen}>
      <Controller
        name="new_text"
        control={control}
        render={({ field }) => (
          <AppInput
            inputPlaceholder="введите текст поста"
            inputType="text"
            inputValue={field.value}
            isError={Boolean(errors.new_text)}
            {...field}
          />
        )}
      />
      <div>
        <AppButton
          buttonText="Сохранить"
          buttonType="submit"
          isDisabled={false}
        />
        <AppButton
          buttonText="Отменить"
          buttonType="button"
          isDisabled={false}
          buttonClick={onClose}
        />
      </div>
    </Modal>
  );
};
