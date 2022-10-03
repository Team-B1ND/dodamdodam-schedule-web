import { useMutation } from "react-query";
import { postModuleLogParam } from "../../repository/log/loe.param";
import logRepository from "../../repository/log/log.repository";

export const usePostModuleLog = () => {
  const mutation = useMutation(
    ({ description, moduleName }: postModuleLogParam) =>
      logRepository.postModuleLog({ description, moduleName })
  );

  return mutation;
};
