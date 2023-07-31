/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as StringApi from "../../../../api";
import * as core from "../../../../core";
export declare const Package: core.serialization.ObjectSchema<serializers.Package.Raw, StringApi.Package>;
export declare namespace Package {
    interface Raw {
        dimensions: serializers.Dimensions.Raw;
        weight: serializers.Weight.Raw;
    }
}
