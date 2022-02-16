import {
  Hardware,
  Provider,
  QueryResult,
  SimpleQueryResult,
} from "@/types/api";
import agent from "@/utils/agent";
import { useMemo } from "react";
import { useQuery } from "react-query";

const HARDWARE_QUERY = "hardware";

// Fetches the hardware data.
const useHardware = (): QueryResult<Hardware[]> => {
  return useQuery(HARDWARE_QUERY, () =>
    agent(`hardware`).then((response) => response.json())
  );
};

const useHardwareInstances = (): SimpleQueryResult<{
  [key: string]: string[];
}> => {
  const { data, dataUpdatedAt, error, isLoading } = useHardware();
  const instances = useMemo(() => {
    return (
      data?.reduce((prev, curr) => {
        return {
          ...prev,
          [curr.provider]: [...(prev[curr.provider] || []), curr.instance],
        };
      }, {} as { [key: string]: string[] }) || {}
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataUpdatedAt]);

  return { data: instances, dataUpdatedAt, error, isLoading };
};

// Fetches and returns all hardware providers.
const useHardwareProviders = (): SimpleQueryResult<Provider[]> => {
  const { data, dataUpdatedAt, error, isLoading } = useHardware();
  const providers = useMemo(() => {
    return [...new Set(data?.map((item) => item.provider))];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataUpdatedAt]);

  return { data: providers, dataUpdatedAt, error, isLoading };
};

export { useHardware, useHardwareProviders, useHardwareInstances };
