export abstract class BaseResourceModel {
    id?: string

    protected abstract fromJson(): BaseResourceModel;
}
