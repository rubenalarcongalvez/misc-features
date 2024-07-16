import { Component } from '@angular/core';
import { TreeDragDropService, TreeNode } from 'primeng/api';
import { NodeService } from '../../shared/services/node.service';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';
import { MaterialModule } from '../../shared/style/material/material.module';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [PrimeNgModule, MaterialModule],
  providers: [NodeService, TreeDragDropService],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss'
})
export class TreeComponent {
  files!: TreeNode<any> | TreeNode<any>[] | null;
  selectedFiles!: TreeNode<any> | TreeNode<any>[] | null;
  items = [
    { label: 'View', icon: 'pi pi-search'},
    { label: 'Unselect', icon: 'pi pi-times'}
  ];
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  constructor(private nodeService: NodeService) {
    this.dataSource.data = TREE_DATA;
  }

  expandAll() {
    (this.files as TreeNode<any>[]).forEach((node) => {
        this.expandRecursive(node, true);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
        node.children.forEach((childNode) => {
            this.expandRecursive(childNode, isExpand);
        });
    }
  }
  
  collapseAll() {
    (this.files as TreeNode<any>[]).forEach((node) => {
        this.expandRecursive(node, false);
    });
  }

  ngOnInit() {
      this.nodeService.getFiles().then((data) => (this.files = data));
  }
}
