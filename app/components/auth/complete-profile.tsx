import { Form, Link } from '@remix-run/react';
import { Input } from '../ui/input';
import Navbar from '../ui/navbar';
import { Avatar } from '../ui/avatar';
import { Button } from '../ui/button';
import { H6 } from '../ui/typography/h6';
import { useTranslation } from '@mitimiti/hooks/use-translation';
import { H4 } from '../ui/typography/h4';
import { Textarea } from '../ui/textarea';
import { H1 } from '../ui/typography/h1';

const CompleteProfile = () => {
  const { t } = useTranslation();
  const commonTexts = t('sectionCompleteProfile', {
    returnObjects: true,
  }) as {
    titleSection: string;
    linkUploadPhoto: string;
    inputUserLabelName: string;
    inputUserplaceholderName: string;
    inputTypeText: string;
    inputUserLabelDate: string;
    inputTypeDate: string;
    textareaUserLabelDescription: string;
    textareaUserplaceholderDescription: string;
    aboutVehicle: string;
    inputVehicleLabelModel: string;
    inputVehiclePlaceholderModel: string;
    inputVehicleLabelColor: string;
    inputVehiclePlaceholderColor: string;
    inputVehicleLabelPlaque: string;
    inputVehiclePlaceholderPlaque: string;
    inputCheckbox: string;
    buttonSave: string;
  };

  const userProfileData = [
    {
      label: commonTexts.inputUserLabelName,
      placeholder: commonTexts.inputUserplaceholderName,
      type: commonTexts.inputTypeText,
    },
    {
      label: commonTexts.inputUserLabelDate,
      type: commonTexts.inputTypeDate,
    },
  ];

  const vehicleData = [
    {
      label: commonTexts.inputVehicleLabelModel,
      placeholder: commonTexts.inputVehiclePlaceholderModel,
      type: commonTexts.inputTypeText,
    },
    {
      label: commonTexts.inputVehicleLabelColor,
      placeholder: commonTexts.inputVehiclePlaceholderColor,
      type: commonTexts.inputTypeText,
    },
    {
      label: commonTexts.inputVehicleLabelPlaque,
      placeholder: commonTexts.inputVehiclePlaceholderPlaque,
      type: commonTexts.inputTypeText,
    },
  ];

  return (
    <div>
      <Navbar></Navbar>

      <div className=" flex flex-col  max-w-[100%] mx-auto  items-center p-6">
        <div className="w-full h-full">
          <div className="p-6 h-full mb-8  max-w-[100%] mx-auto ">
            <div className="flex justify-center mb-8">
              <H1 className="text-blue-600 mb-6 font-bold text-center">
                {commonTexts.titleSection}
              </H1>
            </div>

            <div className="flex justify-center mb-2">
              <Avatar
                classNameWrapper="m-2 w-[80px] h-[80px] bg-gray-300"
                alt="user"
                fallback="FC"
              />
            </div>
            <div className="flex justify-center mb-4">
              <Link to="/" className="underline text-base">
                {commonTexts.linkUploadPhoto}
              </Link>
            </div>

            <Form className="  mx-auto max-w-[525px] space-y-6">
              {userProfileData.map((field, index) => (
                <div key={index} className="mb-6 ">
                  <H6>
                    <label htmlFor={`username-${index}`}>{field.label}</label>
                  </H6>
                  <Input
                    type={field.type}
                    id={`username-${index}`}
                    name={`username-${index}`}
                    placeholder={field.placeholder}
                    className="text-base"
                  />
                </div>
              ))}

              <div>
                <H6>
                  <label htmlFor="textarea">
                    {commonTexts.textareaUserLabelDescription}
                  </label>
                </H6>
                <Textarea
                  id="textareaDescription"
                  placeholder={commonTexts.textareaUserplaceholderDescription}
                  rows={3}
                  className="h-20 text-base"
                />
              </div>
            </Form>
          </div>

          <div className="p-6 h-full mb-8 max-w-[100%] mx-auto">
            <div className="flex justify-center m-4">
              <H4 className="text-blue-600 text-3xl font-semibold text-center">
                {commonTexts.aboutVehicle}
              </H4>
            </div>

            <Form className="  mx-auto max-w-[525px] space-y-6">
              {vehicleData.map((field, index) => (
                <div key={index} className="mb-6">
                  <H6>
                    <label htmlFor={`username-${index}`}>{field.label}</label>
                  </H6>
                  <Input
                    type={field.type}
                    id={`username-${index}`}
                    name={`username-${index}`}
                    placeholder={field.placeholder}
                    className="text-base"
                  />
                </div>
              ))}

              <label htmlFor="myCheckbox" className="flex justify-center">
                <Input
                  type="checkbox"
                  id="myCheckbox"
                  className="mr-2  max-w-[18px] max-h-[18px]"
                />
                {commonTexts.inputCheckbox}
              </label>
              <div className="flex justify-center">
                <Button type="submit">{commonTexts.buttonSave}</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <hr className="w-full m-6 " />
      <br></br>
    </div>
  );
};

export default CompleteProfile;
