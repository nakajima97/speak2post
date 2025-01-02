# アクティビティ図

```mermaid
graph TD
    A[入力画面] --> B{録音開始};
    B -- 録音中 --> C[録音画面];
    C --> D{録音停止};
    D --> E[処理中画面];
    E --> F[結果表示画面];
    F --> G{編集};
    G -- はい --> H[編集画面];
    H --> F;
    G -- いいえ --> I{共有};
    I -- SNS共有 --> J[共有完了];
    I -- ファイル保存 --> K[共有完了];
    F --> L{再録音};
    L --> A;
    F --> M{アプリ終了};

    style E fill:#f9f,stroke:#333,stroke-width:2px
    style C fill:#ccf,stroke:#333,stroke-width:2px
