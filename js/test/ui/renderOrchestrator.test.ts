import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createRenderOrchestrator } from '../../ui/renderOrchestrator.js';
import type { RenderOrchestratorDeps, MethodData } from '../../types.js';

describe('renderOrchestrator', () => {
  let mockDependencies: RenderOrchestratorDeps;
  let orchestrator: ReturnType<typeof createRenderOrchestrator>;

  beforeEach(() => {
    mockDependencies = {
      contentRenderer: { render: vi.fn() },
      diagramRenderer: { render: vi.fn() },
      focusManager: { focusContent: vi.fn() },
      urlManager: { update: vi.fn(), getCurrent: vi.fn() },
      stateManager: { updateSelection: vi.fn() },
    };
    orchestrator = createRenderOrchestrator(mockDependencies);
  });

  describe('createRenderOrchestrator factory', () => {
    it('should return an object with render method', () => {
      expect(typeof orchestrator).toBe('object');
      expect(typeof orchestrator.render).toBe('function');
    });
  });

  describe('render() - null guard', () => {
    it('should not call any dependencies when methodData is null', () => {
      orchestrator.render('testMethod', null as unknown as MethodData);

      expect(mockDependencies.contentRenderer.render).not.toHaveBeenCalled();
      expect(mockDependencies.diagramRenderer.render).not.toHaveBeenCalled();
      expect(mockDependencies.focusManager.focusContent).not.toHaveBeenCalled();
      expect(mockDependencies.stateManager.updateSelection).not.toHaveBeenCalled();
      expect(mockDependencies.urlManager.update).not.toHaveBeenCalled();
    });

    it('should not call any dependencies when methodData is undefined', () => {
      orchestrator.render('testMethod', undefined);

      expect(mockDependencies.contentRenderer.render).not.toHaveBeenCalled();
      expect(mockDependencies.diagramRenderer.render).not.toHaveBeenCalled();
      expect(mockDependencies.focusManager.focusContent).not.toHaveBeenCalled();
      expect(mockDependencies.stateManager.updateSelection).not.toHaveBeenCalled();
      expect(mockDependencies.urlManager.update).not.toHaveBeenCalled();
    });

    it('should not call any dependencies when methodData is omitted', () => {
      orchestrator.render('testMethod');

      expect(mockDependencies.contentRenderer.render).not.toHaveBeenCalled();
      expect(mockDependencies.diagramRenderer.render).not.toHaveBeenCalled();
      expect(mockDependencies.focusManager.focusContent).not.toHaveBeenCalled();
      expect(mockDependencies.stateManager.updateSelection).not.toHaveBeenCalled();
      expect(mockDependencies.urlManager.update).not.toHaveBeenCalled();
    });
  });

  describe('render() - basic orchestration', () => {
    const mockMethodData: MethodData = {
      emoji: '🔄',
      description: 'Test method',
      example: 'Test example',
      code: 'test.code()',
      output: 'test output',
    };

    it('should call contentRenderer.render with methodName and methodData', () => {
      orchestrator.render('union', mockMethodData);

      expect(mockDependencies.contentRenderer.render).toHaveBeenCalledWith(
        'union',
        mockMethodData
      );
    });

    it('should call diagramRenderer.render with methodName', () => {
      orchestrator.render('difference', mockMethodData);

      expect(mockDependencies.diagramRenderer.render).toHaveBeenCalledWith('difference');
    });

    it('should call focusManager.focusContent with no arguments', () => {
      orchestrator.render('intersection', mockMethodData);

      expect(mockDependencies.focusManager.focusContent).toHaveBeenCalledWith();
    });

    it('should call stateManager.updateSelection with methodName', () => {
      orchestrator.render('symmetricDifference', mockMethodData);

      expect(mockDependencies.stateManager.updateSelection).toHaveBeenCalledWith(
        'symmetricDifference'
      );
    });

    it('should call urlManager.update with methodName', () => {
      orchestrator.render('isSubsetOf', mockMethodData);

      expect(mockDependencies.urlManager.update).toHaveBeenCalledWith('isSubsetOf');
    });

    it('should call all dependencies exactly once', () => {
      orchestrator.render('union', mockMethodData);

      expect(mockDependencies.contentRenderer.render).toHaveBeenCalledTimes(1);
      expect(mockDependencies.diagramRenderer.render).toHaveBeenCalledTimes(1);
      expect(mockDependencies.focusManager.focusContent).toHaveBeenCalledTimes(1);
      expect(mockDependencies.stateManager.updateSelection).toHaveBeenCalledTimes(1);
      expect(mockDependencies.urlManager.update).toHaveBeenCalledTimes(1);
    });
  });

  describe('render() - call order', () => {
    it('should call dependencies in correct order', () => {
      const callOrder: string[] = [];
      const mockMethodData: Partial<MethodData> = { emoji: '🔄', description: 'Test' };

      (mockDependencies.contentRenderer.render as ReturnType<typeof vi.fn>).mockImplementation(() =>
        callOrder.push('contentRenderer')
      );
      (mockDependencies.diagramRenderer.render as ReturnType<typeof vi.fn>).mockImplementation(() =>
        callOrder.push('diagramRenderer')
      );
      (mockDependencies.focusManager.focusContent as ReturnType<typeof vi.fn>).mockImplementation(() =>
        callOrder.push('focusManager')
      );
      (mockDependencies.stateManager.updateSelection as ReturnType<typeof vi.fn>).mockImplementation(() =>
        callOrder.push('stateManager')
      );
      (mockDependencies.urlManager.update as ReturnType<typeof vi.fn>).mockImplementation(() =>
        callOrder.push('urlManager')
      );

      orchestrator.render('union', mockMethodData as MethodData);

      expect(callOrder).toEqual([
        'contentRenderer',
        'diagramRenderer',
        'focusManager',
        'stateManager',
        'urlManager',
      ]);
    });
  });

  describe('render() - multiple invocations', () => {
    it('should handle multiple sequential render calls', () => {
      const methodData1: Partial<MethodData> = { emoji: '🔄', description: 'First' };
      const methodData2: Partial<MethodData> = { emoji: '🎯', description: 'Second' };

      orchestrator.render('union', methodData1 as MethodData);
      orchestrator.render('intersection', methodData2 as MethodData);

      expect(mockDependencies.contentRenderer.render).toHaveBeenCalledTimes(2);
      expect(mockDependencies.contentRenderer.render).toHaveBeenNthCalledWith(
        1,
        'union',
        methodData1
      );
      expect(mockDependencies.contentRenderer.render).toHaveBeenNthCalledWith(
        2,
        'intersection',
        methodData2
      );
    });

    it('should maintain independence between calls', () => {
      const methodData: Partial<MethodData> = { emoji: '🔄', description: 'Test' };

      orchestrator.render('union', methodData as MethodData);
      expect(mockDependencies.diagramRenderer.render).toHaveBeenCalledTimes(1);

      orchestrator.render('difference', methodData as MethodData);
      expect(mockDependencies.diagramRenderer.render).toHaveBeenCalledTimes(2);
    });
  });

  describe('render() - different method names', () => {
    const mockMethodData: Partial<MethodData> = { emoji: '🔄', description: 'Test' };

    it('should work with intersection method', () => {
      orchestrator.render('intersection', mockMethodData as MethodData);

      expect(mockDependencies.diagramRenderer.render).toHaveBeenCalledWith('intersection');
      expect(mockDependencies.urlManager.update).toHaveBeenCalledWith('intersection');
    });

    it('should work with union method', () => {
      orchestrator.render('union', mockMethodData as MethodData);

      expect(mockDependencies.diagramRenderer.render).toHaveBeenCalledWith('union');
      expect(mockDependencies.urlManager.update).toHaveBeenCalledWith('union');
    });

    it('should work with difference method', () => {
      orchestrator.render('difference', mockMethodData as MethodData);

      expect(mockDependencies.diagramRenderer.render).toHaveBeenCalledWith('difference');
      expect(mockDependencies.urlManager.update).toHaveBeenCalledWith('difference');
    });

    it('should work with symmetricDifference method', () => {
      orchestrator.render('symmetricDifference', mockMethodData as MethodData);

      expect(mockDependencies.diagramRenderer.render).toHaveBeenCalledWith(
        'symmetricDifference'
      );
      expect(mockDependencies.urlManager.update).toHaveBeenCalledWith('symmetricDifference');
    });

    it('should work with isSubsetOf method', () => {
      orchestrator.render('isSubsetOf', mockMethodData as MethodData);

      expect(mockDependencies.diagramRenderer.render).toHaveBeenCalledWith('isSubsetOf');
      expect(mockDependencies.urlManager.update).toHaveBeenCalledWith('isSubsetOf');
    });

    it('should work with isSupersetOf method', () => {
      orchestrator.render('isSupersetOf', mockMethodData as MethodData);

      expect(mockDependencies.diagramRenderer.render).toHaveBeenCalledWith('isSupersetOf');
      expect(mockDependencies.urlManager.update).toHaveBeenCalledWith('isSupersetOf');
    });

    it('should work with isDisjointFrom method', () => {
      orchestrator.render('isDisjointFrom', mockMethodData as MethodData);

      expect(mockDependencies.diagramRenderer.render).toHaveBeenCalledWith('isDisjointFrom');
      expect(mockDependencies.urlManager.update).toHaveBeenCalledWith('isDisjointFrom');
    });
  });

  describe('render() - edge cases', () => {
    it('should handle empty object as methodData', () => {
      orchestrator.render('test', {} as MethodData);

      // Empty object is truthy, so all dependencies should be called
      expect(mockDependencies.contentRenderer.render).toHaveBeenCalledWith('test', {});
      expect(mockDependencies.diagramRenderer.render).toHaveBeenCalledWith('test');
      expect(mockDependencies.focusManager.focusContent).toHaveBeenCalled();
      expect(mockDependencies.stateManager.updateSelection).toHaveBeenCalledWith('test');
      expect(mockDependencies.urlManager.update).toHaveBeenCalledWith('test');
    });

    it('should handle methodData with partial properties', () => {
      const partialData: Partial<MethodData> = { emoji: '🎯' };

      orchestrator.render('test', partialData as MethodData);

      expect(mockDependencies.contentRenderer.render).toHaveBeenCalledWith(
        'test',
        partialData
      );
      expect(mockDependencies.diagramRenderer.render).toHaveBeenCalled();
    });
  });
});
