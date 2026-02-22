export type SetMethodName =
  | 'difference'
  | 'intersection'
  | 'union'
  | 'symmetricDifference'
  | 'isDisjointFrom'
  | 'isSubsetOf'
  | 'isSupersetOf';

export interface MethodData {
  code: string;
  description: string;
  example: string;
  emoji: string;
  output: string;
}

export type MethodDataMap = Record<SetMethodName, MethodData>;

export type EventHandler<T = unknown> = (payload: T) => void;
export type Unsubscribe = () => void;

export interface EventBus {
  subscribe<T = unknown>(eventName: string, handler: EventHandler<T>): Unsubscribe;
  publish<T = unknown>(eventName: string, payload?: T): void;
  clear(eventName?: string): void;
}

export interface NavigationPayload {
  methodName: SetMethodName;
}

export interface ContentRendererDep {
  render(methodName: string, methodData: MethodData): void;
}

export interface DiagramRendererDep {
  render(methodName: string): void;
}

export interface FocusManagerDep {
  focusContent(): void;
}

export interface UrlManagerDep {
  update(methodName: string): void;
  getCurrent(): string;
}

export interface SelectionStateManagerDep {
  updateSelection(methodName: string): void;
}

export interface RenderOrchestratorDeps {
  contentRenderer: ContentRendererDep;
  diagramRenderer: DiagramRendererDep;
  focusManager: FocusManagerDep;
  urlManager: UrlManagerDep;
  stateManager: SelectionStateManagerDep;
}

export type DiagramStrategy = () => string;
