import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FieldOptionRenderer from "./fieldSelector";
import FormJson from "./formJson";
import FormCodePreview from "./FormCodeEditor";

const FormOutputSelector = () => {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="output">OUTPUT</TabsTrigger>
        <TabsTrigger value="json">JSON</TabsTrigger>
        <TabsTrigger value="code">CODE</TabsTrigger>
      </TabsList>
      <TabsContent value="output">
        <Card>
          <CardHeader>
            <CardTitle>output</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <FieldOptionRenderer />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="json">
        <Card>
          <CardHeader>
            <CardTitle>JSON</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <FormJson />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="code">
        <Card>
          <CardContent className="space-y-2">
            <FormCodePreview />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default FormOutputSelector;
