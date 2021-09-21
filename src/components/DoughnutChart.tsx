import { Card, Skeleton } from "antd";
import { ChartDonut } from "@patternfly/react-charts";

interface Props{
    sdgNames: (programs:any)=>any
    displayOccurence: (programs:any)=>any
    pairArrays:(arr1:[], arr2:[])=>any
    programs:[] 
}

export const DoughnutChart = ({sdgNames,displayOccurence,pairArrays,programs}:Props) => {
    return (
        <div>
            <Card title="Impact Summary" style={{marginTop: '40px'}}>
            {displayOccurence(programs).length === 0 ? (
                <div style={{ textAlign: "center" }}>
                    <Skeleton active />
                </div>
          ) : (
                <div className="chartDonut">
                    <ChartDonut
                        ariaDesc="Impact Summary"
                        ariaTitle="Impact Summary"
                        constrainToVisibleArea={true}
                        data={pairArrays(
                          displayOccurence(programs),
                          sdgNames(programs)
                        )}
                        labels={({ datum }) => `${datum.x}: ${datum.y}`}
                    />
                </div>
          )}
            </Card>
        </div>
    )
}
