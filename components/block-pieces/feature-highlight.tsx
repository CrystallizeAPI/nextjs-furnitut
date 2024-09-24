import { ContentTransformer } from "@crystallize/reactjs-components";
import { Image } from "../image";
export const FeatureHighlight = ({ block }: { block: any }) => {
  if (block === null) return null;
  const { usp } = block;
  return (
    <div className="flex justify-between py-24 gap-8">
      {usp.map((feature: any, index: number) => {
        const { headline, description, icon } = feature;
        const image = icon?.[0];
        return (
          <div key={index} className="flex items-start gap-6">
            <div className="w-1/12 aspect-square mt-1 min-w-1/12">
              <Image {...image} />
            </div>
            <div className="w-11/12 ">
              <h3 className="block-title text-xl font-bold pb-2">{headline}</h3>
              <div className="block-description text-lg leading-7">
                <ContentTransformer json={description} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
